/*
- Função para gerar o PDF
*/

function gerarPdf(){
    let doc = new jsPDF()
    //let imgDate = "";
    //let data = '2626262626262'
    doc.setFontSize(40);
    //doc.addImage(imgData, '', 15, 40, 180, 180);
    doc.setFontSize(15)
    doc.text("Comprovante", 90, 70);
    doc.text("de pagamento", 90, 78);

    doc.setFontSize(25);
    doc.text("-----------------------------------------------------------", 20, 100);

    doc.setFontSize(25);
    doc.text("Pagamento", 20, 120);

    doc.setFontSize(12);
    doc.text(`Realizado em`, 20, 130);

    doc.setFontSize(35);
    doc.text("R$ 8,00", 130, 125);

    doc.setFontSize(25);
    doc.text("-----------------------------------------------------------", 20, 150);

    doc.setFontSize(18);
    doc.text("Dados do beneficiário", 20, 160);

    doc.setFontSize(18);
    doc.text("Benefiniário:", 20, 175);

    doc.setFontSize(18);
    doc.text("BANCO SANTANDER (BRASIL) S.A", 80, 175);

    doc.setFontSize(18);
    doc.text("Banco:", 20, 185);

    doc.setFontSize(18);
    doc.text("BANCO SANTANDER (BRASIL) S.A", 80, 185);

    doc.setFontSize(18);
    doc.text("Dados do pagador", 20, 205);

    doc.setFontSize(18);
    doc.text("Pagador:", 20, 220);

    doc.setFontSize(16);
    doc.text("CONPAY TECNOLOGIA E PAGAMENTOS S/A", 80, 220);

    doc.setFontSize(25);
    doc.text("-----------------------------------------------------------", 20, 235);

    doc.setFontSize(16);
    doc.text("Autenticação: 19164a433b67bb23487b234b55344", 40, 250)

    doc.setFontSize(25);
    doc.text("-----------------------------------------------------------", 20, 265);
    doc.save('Comprovante.pdf')
}