function export_valigie_to_PDF(valigie) {

    var docDefinition = {
        content: [
            {style: 'header', text: 'Generated with Valigie Maker 9000'},
            {columns: []}
        ],
        
        
        styles: {
            header: {
              fontSize: 22,
              bold: true, alignment: 'center',
              alignment: 'center',
              margin: [0, 20]
            },
            table: {
                fontSize: 10
            },
            deafultStyle: {
                fontSize: 10,
                columnGap: 20
            }
        }
    };

    /* Distribute tables in columns */
    col_idx = 1;
    col_fill_level = 0;
    col_n = 3

    for (var i = 0; i < valigie.length; i++) {
        var tmp_table = {
            style: 'table',
            headerRows: 1,
            widths: [15, 15, 'auto'],
            body: [
                [{text: valigie[i].name, colSpan: 3, bold: true, alignment: 'center', fillColor: '#bbb', fontSize: 16}, {}, {}],
                [{text: 'A', bold: true, alignment: 'center', fillColor: '#ddd'}, {text: 'R', bold: true, alignment: 'center', fillColor: '#ddd'}, {text: 'Descrizione', bold: true, alignment: 'center', fillColor: '#ddd'}]
            ]
        }

        for (var j = 0; j < valigie[i].items.length; j++) {
            tmp_table.body.push(
                ['     ', '    ', valigie[i].items[j]]
            )
        }

        
        docDefinition.content[col_idx].columns.push({'table': tmp_table, 'width': 'auto', 'margin': [10, 10]});
        col_fill_level += 1;
        if (col_fill_level == col_n) {
            docDefinition.content.push({columns: []});
            col_idx += 1;
            col_fill_level = 0;
        }
    }

      
    console.log(docDefinition);
    pdfMake.createPdf(docDefinition).open();

}