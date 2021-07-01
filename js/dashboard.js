debugColor = ['#6B8E23', '#FFA500', '#DA70D6', '#32CD32', '#4169E1', '#800000', '#EE82EE', '#696969', '#FF8C00', '#9ACD32', '#E9967A', '#FFD700'];
// originalColorList2 = ['#8dd3c7', '#ee3b9b', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#4c4a4c', '#bc80bd', '#ccebc5', '#ffed6f', '#DB7093'];
originalColorList = ['#8dd3c7', '#228B22', '#a999da', '#A52A2A', '#DA70D6', '#578fe1', '#c2de5c', '#E9967A', '#696969', '#a26ca3', '#32CD32', '#FFD700', '#DB7093'];
// originalCities = ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"];
originalCities = ["Nanjing", "Wuxi", "Xuzhou", "Changzhou", "Suzhou", "Nantong", "Lianyungang", "Huaian", "Yancheng", "Yangzhou", "Zhenjiang", "Taizhou", "Suqian"];

var temp = 0;
var chk_value = new Array();
window.alert = function (msg, callback) {
    var div = document.createElement("div");
    div.innerHTML = "<style type=\"text/css\">"
        + ".nbaMask { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }                                                                                                                                                                       "
        + ".nbaMaskTransparent { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; }                                                                                                                                                                                            "
        + ".nbaDialog { position: fixed; z-index: 5000; width: 80%; max-width: 300px; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; text-align: center; border-radius: 8px; overflow: hidden; opacity: 1; color: white; }"
        + ".nbaDialog .nbaDialogHd { padding: .2rem .27rem .08rem .27rem; }                                                                                                                                                                                                                         "
        + ".nbaDialog .nbaDialogHd .nbaDialogTitle { font-size: 17px; font-weight: 400; }                                                                                                                                                                                                           "
        + ".nbaDialog .nbaDialogBd { padding: 5px 5px; font-size: 15px; line-height: 1.3; color: #000000; }                                                                                                                                          "
        + ".nbaDialog .nbaDialogFt { position: relative; line-height: 48px; font-size: 17px; display: -webkit-box; display: -webkit-flex; display: flex; }                                                                                                                                          "
        + ".nbaDialog .nbaDialogFt:after { content: \" \"; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }               "
        + ".nbaDialog .nbaDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #ff0000; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; }                                                                       "
        + ".nbaDialog .nbaDialogBtn:after { content: \" \"; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; border-left: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); }             "
        + ".nbaDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }"
        + "</style>"
        + "<div id=\"dialogs2\" style=\"display: none\">"
        + "<div class=\"nbaMask\"></div>"
        + "<div class=\"nbaDialog\">"
        + "    <div class=\"nbaDialogHd\">"
        + "        <strong class=\"nbaDialogTitle\"></strong>"
        + "    </div>"
        + "    <div class=\"nbaDialogBd\" id=\"dialog_msg2\">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>"
        + "    <div class=\"nbaDialogHd\">"
        + "        <strong class=\"nbaDialogTitle\"></strong>"
        + "    </div>"
        + "    <div class=\"nbaDialogFt\">"
        + "        <a href=\"javascript:;\" class=\"nbaDialogBtn nbaDialogBtnPrimary\" id=\"dialog_ok2\">OK</a>"
        + "    </div></div></div>";
    document.body.appendChild(div);

    var dialogs2 = document.getElementById("dialogs2");
    dialogs2.style.display = 'block';

    var dialog_msg2 = document.getElementById("dialog_msg2");
    dialog_msg2.innerHTML = msg;
    var dialog_ok2 = document.getElementById("dialog_ok2");
    dialog_ok2.onclick = function () {
        dialogs2.style.display = 'none';
    };
};
// ------------------------------ city legend -----------------------------------------------
addCities(originalCities);

// ------------------------------ init dashboard -----------------------------------------------
window.onload = function () {
    temp = 0;

    function initDashboard() {
        $("input:radio[id=radios1]").prop("checked", true);
        $("input:checkbox[value=全选]").prop("checked", true);
        updateDashboard('enco')
    }

    initDashboard();

};

// ------------------------------ update dashboard according to city-----------------------------------------------
$("input[type=\"checkbox\"]").change(function () {

    if (temp == 0) {
        $("input:checkbox[value=全选]").prop("checked", false);
    }
    var cate = $("input[type='radio']:checked").val();
    // var chk_value = new Array();
    chk_value.length = 0;
    $('input[name="city"]:checked').each(function () {
        chk_value.push($(this).val());
    });
    if ($("input[value != 全选]:checked")) {
        if (chk_value.includes("全选")) {
            // console.log("a")
            $("input:checkbox[value=全选]").prop("checked", true);
            $("input:checkbox[value!=全选]").prop("checked", false);
            updatePC(cate)
            addMap(cate)
            temp = 0;
        } else {
            // console.log("b")
            // console.log(chk_value)
            $("input:checkbox[value=全选]").prop("checked", false);
            updateHighlightPC(chk_value, cate)
            addHighlightMap(chk_value, cate)
            temp += 1;
        }
    }
    if (chk_value.length == 0) {
        temp = 0;
        // console.log("c")
        // console.log(chk_value)
        // console.log(chk_value);
        $("input:checkbox[value=全选]").prop("checked", true);
        updatePC(cate)
        addMap(cate)
    }
});
$("button[id=\"city13bt\"]").click(function () {
    // // console.log($(this).text())
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    // var cate = $("input[type='radio']:checked").val();
    // chk_value.length = 0;
    // updatePC(cate)
    // addMap(cate)
    $("input:checkbox[value=全选]").prop("checked", true).change();
})
$("button[name=\"citybt\"]").click(function () {
    // var textval = $("#text_id").attr("value");
    var name = $(this).text();
    if (name == 'Nanjing')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Nanjing']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Nanjing']").prop("checked", false).change();
    else if (name == 'Wuxi')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Wuxi']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Wuxi']").prop("checked", false).change();
    else if (name == 'Xuzhou')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Xuzhou']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Xuzhou']").prop("checked", false).change();
    else if (name == 'Changzhou')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Changzhou']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Changzhou']").prop("checked", false).change();
    else if (name == 'Suzhou')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Suzhou']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Suzhou']").prop("checked", false).change();
    else if (name == 'Nantong')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Nantong']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Nantong']").prop("checked", false).change();
    else if (name == 'Lianyungang')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Lianyungang']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Lianyungang']").prop("checked", false).change();
    else if (name == 'Huaian')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Huaian']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Huaian']").prop("checked", false).change();
    else if (name == 'Yancheng')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Yancheng']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Yancheng']").prop("checked", false).change();
    else if (name == 'Yangzhou')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Yangzhou']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Yangzhou']").prop("checked", false).change();
    else if (name == 'Zhenjiang')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Zhenjiang']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Zhenjiang']").prop("checked", false).change();
    else if (name == 'Taizhou')
        if ($(this).attr("value") % 2 == 1)
            $("input:checkbox[value = 'Taizhou']").prop("checked", true).change();
        else
            $("input:checkbox[value = 'Taizhou']").prop("checked", false).change();
    else if ($(this).attr("value") % 2 == 1)
        $("input:checkbox[value = 'Suqian']").prop("checked", true).change();
    else
        $("input:checkbox[value = 'Suqian']").prop("checked", false).change();

    if ($(this).attr("value") == 1)
        $(this).val("2")
    else
        $(this).val("1")
})

// ------------------------------ Factors  Explanation-----------------------------------------------
$('body').on('click', '.namebt', function () {
    var valueName = $(this).text();
    console.log(valueName);
    if (valueName == "Gross regional product ")
        alert("Gross regional product (GRP) is a monetary measure of the market value of all final goods and services produced in a region or subdivision of a country in a period (quarterly or yearly) of time.", "")
    else if (valueName == "Budget expenditure")
        alert("The Expenditure Budget of the government highlights the allotment of funds for disbursement to different ministries, sectors, departments in a financial year as part of the Union Budget.")
    else if (valueName == "Number of granted patent")
        alert("Inventions with granted patents mean a person cannot manufacture for profit-making, use, import, sell, or distribute the products or processes without consent from the patent owner.")
})
// ------------------------------ update dashboard according to category and city-----------------------------------------------
$("input[id=radios1]").click(function () {
    temp = 0;
    var cate = $("input[type='radio']:checked").val();
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});
$("input[id=radios2]").click(function () {
    // temp = 0;
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    var cate = $("input[type='radio']:checked").val();
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});
$("input[id=radios3]").click(function () {
    // temp = 0;
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    var cate = $("input[type='radio']:checked").val();
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});
$("input[id=radios4]").click(function () {
    var cate = $("input[type='radio']:checked").val();
    // temp = 0;
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }

});

$("#cateEnco").click(function () {
    $("input:radio[id=radios1]").prop("checked", true);
    temp = 0;
    var cate = $("input[type='radio']:checked").val();
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});
$("#cateInha").click(function () {
    $("input:radio[id=radios2]").prop("checked", true);
    var cate = $("input[type='radio']:checked").val();
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});
$("#cateInfr").click(function () {
    $("input:radio[id=radios3]").prop("checked", true);
    var cate = $("input[type='radio']:checked").val();
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});
$("#cateRD").click(function () {
    $("input:radio[id=radios4]").prop("checked", true);
    var cate = $("input[type='radio']:checked").val();
    // temp = 0;
    // $("input:checkbox[value=全选]").prop("checked", true);
    // $("input:checkbox[value!=全选]").prop("checked", false);
    if (chk_value.length == 0) {
        updateDashboard(cate)
    } else {
        updateSubTitles(cate)
        updateSubTitles(cate)
        addMapLegend(cate)
        // add values
        updateValues(cate)
        // add correlation image
        addCorrImage(cate)
        if ($("input[value != 全选]:checked")) {
            if (chk_value.includes("全选")) {
                $("input:checkbox[value=全选]").prop("checked", true);
                $("input:checkbox[value!=全选]").prop("checked", false);
                updatePC(cate)
                addMap(cate)
                temp = 0;
            } else {
                $("input:checkbox[value=全选]").prop("checked", false);
                updateHighlightPC(chk_value, cate)
                addHighlightMap(chk_value, cate)
                temp += 1;
            }
        }
    }
});

