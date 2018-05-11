/**
 * Created by Djerson on 09/05/2018.
 */

$(document).ready(function () {

    $.getJSON('../config/tsconfig.json', function (config) {
        console.log(config)
        if(!config.Settings.login)
        {
            $('#loader-content').hide();
            $('#content').show();
            $("#apps-title").text(config.Application.name);
            $("#apps-version").text(config.Application.version);

            $.getJSON('../config/datas.json', function (datas) {
                console.log(datas);
                var html_data = "";
                for(var i=0; i< datas.Groups.length; i++)
                {
                    html_data += '<div class="group-tile">';
                        html_data += '<div class="group-tile-header">';
                            html_data += datas.Groups[i].name;
                        html_data += '</div>';

                        html_data += '<ul class="group-tile-item">';
                        for(var j=0;  j < datas.Groups[i].apps.length; j++)
                        {
                            console.log(datas.Groups[i].apps[j]);
                            html_data += '<a href="'+datas.Groups[i].apps[j].url+'">';
                            if(datas.Groups[i].apps[j].dimension == 'sm')
                            {
                                html_data += '<li class="tile tile-'+datas.Groups[i].apps[j].dimension+'"';
                                html_data += ' title="'+datas.Groups[i].apps[j].description+'"';
                                html_data += 'style="background-color:'+datas.Groups[i].apps[j].bg+';" >';
                                    html_data += '<i class="fa '+datas.Groups[i].apps[j].icon+' fa-2x"></i>';
                                html_data += '</li>';

                            }else if(datas.Groups[i].apps[j].dimension == 'xl'){

                                html_data += '<li class="tile tile-'+datas.Groups[i].apps[j].dimension+'"';
                                html_data += ' title="'+datas.Groups[i].apps[j].description+'" ';
                                html_data += 'style="background-color:'+datas.Groups[i].apps[j].bg+';" >';
                                    html_data += '<p class="tile-icon">';
                                        html_data += '<i class="fa '+datas.Groups[i].apps[j].icon+' fa-5x"></i>';
                                    html_data += '</p>';
                                    html_data += '<p class="tile-name">';
                                        html_data += datas.Groups[i].apps[j].name;
                                    html_data += '</p>';
                                html_data += '</li>';

                            }else{

                                html_data += '<li class="tile tile-'+datas.Groups[i].apps[j].dimension+'"';
                                html_data += ' title="'+datas.Groups[i].apps[j].description+'"';
                                html_data += 'style="background-color:'+datas.Groups[i].apps[j].bg+';" >';
                                    html_data += '<p class="tile-icon">';
                                        html_data += '<i class="fa '+datas.Groups[i].apps[j].icon+' fa-3x"></i>';
                                    html_data += '</p>';
                                    html_data += '<p class="tile-name">';
                                        html_data += datas.Groups[i].apps[j].name;
                                    html_data += '</p>';
                                html_data += '</li>';

                            }
                            html_data += '</a>';
                        }
                        html_data += '</ul>';

                    html_data += '</div>';
                }
                $('#page').html(html_data);
            });

        }else{

        }
    });

});

$('#setting').click(function () {
    $('#setting-dialog').show();
    return false;
});

$('#close-dialog').click(function () {
    $('#setting-dialog').hide();
});


