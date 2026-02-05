# Projet Data Voitures

Analyse d'une basse de donnée créer par moi même pour répondre a une problématique et de contraintes lié a un contexte métier '

## Description

Ce projet contient un notebook Jupyter :
- Analyse Retour sur investissement pour les Supercars et Hypercars a l'aide des différentes données 
- Graphiques interactifs 
- Répartition des voitures par segment, continent, année, puissance, poids, etc.
- Classements (Top 5) des voitures les plus puissantes, meilleur rapport poids/puissance
- fichier exel 
- readme


## Prérequis

- Python 3.8 ou supérieur
- Jupyter Notebook ou VS Code avec l'extension Jupyter

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd projet_data_voitures
```





### 2. Installer les dépendances

```bash
pip install pandas numpy plotly openpyxl
```

Ou avec le fichier requirements.txt :
```bash
pip install -r requirements.txt
```

## Dépendances

                            
 pandas     Manipulation de données                  
 numpy      Calculs numériques                       
 plotly     Graphiques interactifs                   
 openpyxl   Lecture des fichiers Excel (.xlsx)       

## Fichiers du projet

```
projet_data_voitures/
├── notebook_jupyter.ipynb   # Notebook principal d'analyse
├── voitures.xlsx            # Données source
├── requirements.txt         # Liste des dépendances
└── README.md                # Ce fichier
```

## Utilisation

1. Ouvrir le notebook `notebook_jupyter.ipynb` dans Jupyter ou VS Code
2. S'assurer que le fichier `voitures.xlsx` est présent dans le même dossier
3. Exécuter les cellules du notebook dans l'ordre ou tout d'un coup en appuyant sur Run ALL

## Auteur

Quentin OUDIN 
