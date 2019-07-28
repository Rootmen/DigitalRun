;
$(document).ready(function() {
    setTimeout(mainInit,200);
});

function mainInit() {
    M.AutoInit();
    var  lk = '#lkbutton';
    function resizeAut() {
        $(lk).off('click');
        $(lk).css('width','100%').css('height','0').css('position','absolute');
        $('.main_container').append($(lk));
        var prop = {
            'position': 'absolute',
            'top': '50%',
            'width': '300px',
            'height': '300px',
            'left': '50%',
            'margin':'-150px 0 0 -150px'
        };
        $(lk).append('<div class="row" style="background-color: white;height: 100%;width: 100%;">\n' +
            '        <div class="input-field col s6" style="background-color: white">\n' +
            '          <input id="log" type="text" class="validate">\n' +
            '          <label for="log">Логин</label>\n' +
            '        </div>\n' +
            '        <div class="input-field col s6" style="background-color: white">\n' +
            '          <input id="pss" type="password" class="validate">\n' +
            '          <label for="pss">Пароль</label>\n' +
            '        </div>\n' +
            '       <button class="btn waves-effect waves-light" type="submit" name="action" id="aut" style="background-color: #2344a4;     ">Авторизация</button></div>');
        $(lk).animate(prop,100,'linear', function () {
            $(lk).append('<div class="close" style="width:30px;height:30px;right:0;top:0;"></div>');
             $(lk).find('#aut').on('click', lkInit)
        })
    }
   $(lk).on('click', resizeAut)
}

function lkInit() {
    $('#mainpage').animate({opacity:0},'linear', function () {
        var elem = $('#mainpage');
        elem.empty()
            .css('flex-direction', 'row')
            .append('<div class="byrger" style="flex: 0 0 120px"></div>')
            .append('<div class="contentlk" style="flex: 1 1 1px"></div>');
        elem.find('.byrger').append('<div style="display:flex;flex-direction:column;width:100%;height:100%;border: 1px solid black;" class="byrgercontent"></div>');
        elem.find('.byrgercontent').append('<button class="btn waves-effect waves-light" type="submit" name="action" id="lkb1" style="background-color: #2344a4;margin: 5px;">Расписание</button></div>')
            .append('<button class="btn waves-effect waves-light" type="submit" name="action" id="lkb2" style="background-color: #2344a4;margin: 5px;">Статус документов</button></div>')
            .append('<button class="btn waves-effect waves-light" type="submit" name="action" id="lkb2" style="background-color: #2344a4;margin: 5px;;">Заметки</button></div>')
            .append('<button class="btn waves-effect waves-light" type="submit" name="action" id="lkb2" style="background-color: #2344a4;margin: 5px;;">Статистика</button></div>')
            .append('<button class="btn waves-effect waves-light" type="submit" name="action" id="lkb3" style="background-color: #2344a4;margin: 5px;;">Конструктор документов</button></div>');
        $('#lkb3').on('click', constrykt);
        elem.animate({opacity:1},'linear');
    });
}

function constrykt() {
    var elem = $('#mainpage');
    elem.find('.byrgercontent').append('<div style="width:100%;height:100%;"></div>')
}