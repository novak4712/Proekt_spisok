$(document).ready(function () {

    $("#create").click(function () {               //  кнопка создать элемент li
        var text = $("#text").val();
        if (!text) {
            alertify.alert("Введите название для элемента списка.");
            return false;
        }
        var color = $("#color").val();
        if (!color) {
            alertify.alert("Введите цвет для элемента списка.");
            return false;
        }
        var marker = $("#marker").val();
        $("ul").append("<li>" + text + "</li>");
        $("li:last-child").css({
            "color": color,
            "list-style-type": marker
        });
        $("#text").val("");
        $("#color").val("");
        $("#marker").val("select a marker");
    });

    $("ul").on('click', "li", function () {            //   обработка фокуса на элементе li
        $("li").each(function () {
            $(this).removeClass("selected")
        });
        $(this).toggleClass("selected");
        var color = $(".selected").attr("style");
        color = color.slice( (color.indexOf(":") + 2), (color.indexOf(";")) );
        var marker = $(".selected").css("list-style-type");
        var text = $(".selected").text();

        $("#text").val(text);
        $("#color").val(color);
        $("#marker").val(marker);
    });

    $("#change").click(function () {                  //  кнопка измененния элемента li
        var findLi = $("li").length;
        if (!(findLi)){
            alertify.alert("Создайте элемент списка, перед изменением.");
            return;
        }
        var findclass = $("li").hasClass("selected");
        if(findclass === false){
            alertify.alert("Выберите элемент списка, перед изменением.");
            return;
        }
        var text = $("#text").val();
        if (!text) {
            alertify.alert("Введите название для элемента списка.");
            return false;
        }
        var color = $("#color").val();
        if (!color) {
            alertify.alert("Введите цвет для элемента списка.");
            return false;
        }

        var marker = $("#marker").val();
        $(".selected").text(text);
        $(".selected").css({
            "color": color,
            "list-style-type": marker
        });
    });

    $("#delete").click(function () {              // кнопка удаления элемента li
        var findLi = $("li").length;
        if (!(findLi)){
            alertify.alert("Сначала создайте элемент списка.");
            return;
        }
        var findclass = $("li").hasClass("selected");
        if (findclass) {
            $(".selected").remove();
        } else {
            alertify.alert("Выберите элемент списка, перед удалением.");
        }
    });
});

