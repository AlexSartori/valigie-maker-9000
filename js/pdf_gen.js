function export_valigie_to_PDF(valigie) {

    var docDefinition = {
        content: [
            {style: 'header', text: 'Generated with Valigie Maker 9000'},
            {columns: []}
        ],
        
        
        styles: {
            header: {
              fontSize: 18,
              bold: true, alignment: 'center',
              alignment: 'center',
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 15, 0, 0]
            }
        }
    };

    for (var i = 0; i < valigie.length; i++) {
        var tmp_table = {
            headerRows: 1,
            widths: [15, 15, 'auto'],
            body: [
                [{text: valigie[i].name, colSpan: 3, bold: true, alignment: 'center'}, {}, {}],
                [{text: 'A', bold: true, alignment: 'center'}, {text: 'R', bold: true, alignment: 'center'}, {text: 'Descrizione', bold: true, alignment: 'center'}]
            ]
        }

        for (var j = 0; j < valigie[i].items.length; j++) {
            tmp_table.body.push(
                ['     ', '    ', valigie[i].items[j]]
            )
        }
        docDefinition.content[1].columns.push({'table': tmp_table});
    }

      
    console.log(docDefinition);
    pdfMake.createPdf(docDefinition).open();

}