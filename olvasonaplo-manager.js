let counter = 1;
$(document).ready(function() {
    $("#plus").click(function() {
        $("#plus").before('<tr><td><b>' + ++counter + '. fejezet</b></td><td><input class="long-description-titles" placeholder="Fejezet címe"></td><td><textarea class="long-description" placeholder="Ide jön a(z) ' + counter + '. fejezet hosszabb, összefoglalása."></textarea></tr>');
    });

    $("*").keyup(function() {
        get();
    });
    $("*").change(function() {
        get();
    });
});

function get() {
    let title = $("#title").val();
    let author = $("#author").val();
    let place = $("#place").val();
    let time = $("#time").val();
    let mainCharacter = $("#main-character-name").val(); // or main characters

    // radios
    let noDate = document.getElementById("no-date");
    let oneMainCharacter = document.getElementById("one-main-character");

    let relaseDate = $("#relase-date").val();
    let simpleDescription = $("#simple-description").val();
    
    let longDescriptions = document.getElementsByClassName("long-description");
    let longDescriptionTitles = document.getElementsByClassName("long-description-titles");

    let opinion = $("#opinion").val();

    /* RESULT */
    let result = "<h2>" + title + " olvasónapló</h2><p>A történet " + place + " kezdődik " + time;
    if (noDate.checked) {
        result += ". Az időpontot nem tudjuk pontosan, nem ír róla a könyv, azonban lehetséges, hogy a kiadás idejében, ami " + relaseDate + ". ";
    } else {
        result += ". A kiadás éve " + relaseDate + ". ";
    }
    
    result += "A könyv szerzője " + author + ", regénye ";
    if (oneMainCharacter.checked) {
        result += "főszereplője " + mainCharacter;
    } else {
        result += "főszereplői " + mainCharacter;
    }
    result += ".</p><p>" + simpleDescription + "</p>";

    for (let i = 0; i < longDescriptions.length; i++) {
        result += "<h2>";
        if (i+1 == 01) {
            result += "1";
        } else {
            result += i+1;
        }
        let abc = longDescriptions[i].value;
        abc = abc.toString();
        abc = encodeURI(abc);
        abc = abc.replaceAll("%0A", "<br>");
        result += ". fejezet: " + longDescriptionTitles[i].value + "</h2><p>" + abc + "</p>";
    }
    result += "<br><p>" + opinion + "</p>";

    $(".result").html(result);
}