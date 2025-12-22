import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from sklearn.metrics import (
    accuracy_score, roc_auc_score, roc_curve,
    confusion_matrix, classification_report,
    precision_recall_curve, f1_score
)

def evaluate_models_full(models, X_test, y_test, export_csv=True):
    results = []
    roc_info = {}
    pr_info = {}
    confusion_matrices = {}
    f1_scores = {}

    for name, model in models.items():
        print("="*70)
        print(f"Evaluating Model: {name}")
        print("="*70)

        # ----- Safe probability extraction ----- #
        y_proba = None
        if hasattr(model, "predict_proba"):
            try:
                y_proba = model.predict_proba(X_test)[:, 1]
            except:
                pass

        if y_proba is None:
            try:
                y_proba = model.decision_function(X_test)
            except:
                print(f"⚠ {name} cannot produce probability scores — ROC/AUC will be skipped.")

        # ----- Predictions ----- #
        y_pred = model.predict(X_test)

        # ----- Metrics ----- #
        accuracy = accuracy_score(y_test, y_pred)
        f1 = f1_score(y_test, y_pred)
        roc_auc = roc_auc_score(y_test, y_proba) if y_proba is not None else None

        results.append({
            "Model": name,
            "Accuracy": accuracy,
            "ROC_AUC": roc_auc,
            "F1_Score": f1
        })

        f1_scores[name] = f1

        # ----- Confusion matrix ----- #
        cm = confusion_matrix(y_test, y_pred)
        confusion_matrices[name] = cm

        # ----- Classification Report ----- #
        print(classification_report(y_test, y_pred))

        # ----- ROC info ----- #
        if y_proba is not None:
            fpr, tpr, _ = roc_curve(y_test, y_proba)
            precision, recall, _ = precision_recall_curve(y_test, y_proba)

            roc_info[name] = (fpr, tpr)
            pr_info[name] = (precision, recall)

    # Convert results to DataFrame
    results_df = pd.DataFrame(results)

    # ------------------------------------------------------
    # SAVE RESULTS
    # ------------------------------------------------------
    if export_csv:
        results_df.to_csv("model_results.csv", index=False)
        print("\n📁 Results exported to 'model_results.csv'\n")

    # ------------------------------------------------------
    # ROC CURVES
    # ------------------------------------------------------
    if len(roc_info) > 0:
        plt.figure(figsize=(8, 6))
        for name, (fpr, tpr) in roc_info.items():
            plt.plot(fpr, tpr, label=name)

        plt.plot([0, 1], [0, 1], "k--")
        plt.title("ROC Curve Comparison")
        plt.xlabel("False Positive Rate")
        plt.ylabel("True Positive Rate")
        plt.grid()
        plt.legend()
        plt.show()

    # ------------------------------------------------------
    # F1-SCORE BAR PLOT
    # ------------------------------------------------------
    f1_df = pd.DataFrame(list(f1_scores.items()), columns=["Model", "F1_Score"])
    plt.figure(figsize=(8, 6))
    ax = sns.barplot(data=f1_df, x="Model", y="F1_Score")
    plt.title("F1 Score Comparison")
    plt.ylim(0, 1.05)
    plt.xticks(rotation=45)

    # add score labels
    for p in ax.patches:
        ax.annotate(f"{p.get_height():.3f}",
                    (p.get_x() + p.get_width() / 2, p.get_height()),
                    ha="center", va="bottom")

    plt.show()

    # ------------------------------------------------------
    # CONFUSION MATRIX GRID
    # ------------------------------------------------------
    num_models = len(confusion_matrices)
    cols = 2
    rows = int(np.ceil(num_models / cols))

    plt.figure(figsize=(12, rows * 4))

    for idx, (name, cm) in enumerate(confusion_matrices.items(), 1):
        plt.subplot(rows, cols, idx)
        sns.heatmap(cm, annot=True, fmt="d", cmap="Reds")
        plt.title(f"{name}")
        plt.xlabel("Predicted")
        plt.ylabel("Actual")

    plt.tight_layout()
    plt.show()

    # ------------------------------------------------------
    # SELECT BEST MODEL
    # ------------------------------------------------------
    ranked = results_df.sort_values(
        by=["ROC_AUC", "Accuracy", "F1_Score"],
        ascending=False
    ).reset_index(drop=True)

    best_model_name = ranked.iloc[0]["Model"]

    print("\n🏆 BEST MODEL SELECTED:", best_model_name)
    print(ranked)

    return ranked