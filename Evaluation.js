for (const i in $('.jqx-radiobutton-input')) {
    if (i % 5 === 0)
        $('.jqx-radiobutton-input')[i].click();
}
for (var i = 0; i < $('#wjtx-root')[0].__vue__._data.teachers.length; i++) {
    $('#wjtx-root')[0].__vue__._data.teachers[i].DA[11].DA = 'nice';
}
$("button:nth-child(2)").click();
setTimeout(() => {
    $('.bh-color-primary-5')[0].click();
}, 100);
