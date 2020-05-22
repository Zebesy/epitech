$('#jeu').ready(function() {
    let puissance4 = new p4('#jeu');

    $('#recommencer').on('click', function() {
        $('#jeu').empty();
        puissance4.Grille();
        $('#recommencer').css('visibility', 'hidden');
    })
});