// Func para gerar o pdf

let doc = new jsPDF()
doc.text('Hello Wolrd!', 10, 10)
doc.save('a4.pdf')