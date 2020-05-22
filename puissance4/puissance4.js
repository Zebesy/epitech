class p4 {
    constructor(selector) {
        this.COL = prompt("Indiquez le nombre de colonne","");
        this.LGN = prompt("Indiquez le nombre de ligne","");
        this.selector = selector;
        this.player = 'red';

        this.Grille();
        this.freeCase()
        this.Winner();
    }

    Grille() {
        let game = $(this.selector);
        //  Afficher le noombre ligne/colonne
        for (let lgn = 0; lgn < this.LGN; lgn++){
            let longueur = $('<div>').addClass('lgn');
            for (let col = 0; col < this.COL; col++){
                let colonne = $('<div>').addClass('col empty').attr("data-col", col).attr('data-lgn', lgn); 
                longueur.append(colonne);
            } 
            game.append(longueur);
        }
    }

    freeCase() {
        let game = $(this.selector);
        let that = this; //Pour réutiliser this pour $(that(= this).player)
       // Code pour trouver la case vide
        function dataCase(col){
            let datacol = $(`.col[data-col='${col}']`);

            for (let i = datacol.length - 1; i >= 0; i--){
                let datac = $(datacol[i]);
                if (datac.hasClass('empty')) {
                    return datac;
                } 
            } 
            return null;   
        }

        game.on('mouseenter', '.col.empty', function() {
            let colonne = $(this).data('col');
            let last = dataCase(colonne);

            if (last != null){
                last.addClass(`prev${that.player}`);
            }
        });

        game.on('mouseleave', '.col', function() {
            $('.col').removeClass(`prev${that.player}`);
        });

        game.on('click', '.col.empty', function() {
            let colonne = $(this).data('col');
            let last = dataCase(colonne);
            last.addClass(`${that.player}`).removeClass('empty').removeClass(`prev${that.player}`).data('player', `${that.player}`);
            
            let winner = that.Winner(last.data('lgn'), last.data('col'));
            that.player = (that.player === 'red') ? 'yellow' : 'red'; 

            if(winner){
                alert(`Les ${winner} ont gagné.`);
                $('#recommencer').css('visibility', 'visible');
            }
        });
    }

    Winner(lgn, col){
        let that = this;

        function getPosition(x, y) {
            return $(`.col[data-lgn='${x}'][data-col='${y}']`); 
        }

        function position(position){
            let total = 0;
            let x = lgn + position.x ;
            let y = col + position.y ; 
            let next = getPosition(x, y);

            while(x >= 0 && x < that.LGN && y >= 0 && y < that.COL && next.data('player') === that.player){
                total ++;
                x += position.x;
                y += position.y;
                next = getPosition(x, y); 
                }
            return total;
        }

        function Win(positionX, positionY){
            let total = 1 + position(positionX) + position(positionY);
            if (total >= 4) {
                return that.player;
            } else {
                return null;
            }
        }

        function positionH(){
            return Win({x: 0, y:-1}, {x: 0, y: 1});
        }

        function positionV(){
            return Win({x: -1, y:0}, {x: 1, y: 0});
        }

        function positionDD(){
            return Win({x: 1, y:1}, {x: -1, y: -1});
        }

        function positionDG(){
            return Win({x: 1, y:-1}, {x: -1, y: 1});
        }
        return positionH() || positionV() || positionDD() || positionDG();
    }   
}