// Using jQuery

$('button').click(e => {
    e.preventDefault();
    var data = $('form').serializeArray();
    // for(let i = 0; i < data.length; i++){
    //     console.log(data[i]);
    // }
    var rollNo = data[0].value;
    var name = data[1].value;
    var marks = data[2].value;

    $('aside').append('<div class="output"> <p>Roll No. <span>&nbsp;' + rollNo +' </span>, &nbsp;<span> ' + name + ' </span> &nbsp;has scored <span>&nbsp;' + marks + ' </span> &nbsp;marks.</p></div>');
});
