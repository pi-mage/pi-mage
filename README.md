# pi-mage
Local cloud for files storage


## Lancement du serveur

```SH
php artisan serve
```


## Erreurs possibles

- #### Dépendances
    Si vous obtenez l'erreur suivante alors que vous avez bien installé toutes les dépendances (voir documentation) :
    
    ```SH
    PHP Warning:  require(/home/userName/Documents/pi-mage/vendor/autoload.php): Failed to open stream: No such file or directory in /home/edutra-ippon/Documents/pi-mage/artisan on line 18
    PHP Fatal error:  Uncaught Error: Failed opening required '/home/userName/Documents/pi-mage/vendor/autoload.php' (include_path='.:/usr/share/php') in /home/userName/Documents/pi-mage/artisan:18
    Stack trace:
    #0 {main}
    thrown in /home/userName/Documents/pi-mage/artisan on line 18
    ```
    
    executez cette commande puis relancez la commande précédente :
    
    ```SH
    composer install
    ```

- #### Erreur 500 sans exceptions dans les logs (clé maquante)

    Il est possible que ceci vienne d'une clé manquante.
    Si vous n'avez pas de fichier `.env` à la racine du projet (ex: après avoir cloné le projet), executez les deux commandes suivantes :
    
    ```SH
    cp .env.example .env
    php artisan key:generate
    ```
