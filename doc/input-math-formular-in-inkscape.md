we have 2 options, but both of them need to have inkscape run in admin mode.

1. Extension>Text>Formula(pdfLatex)
    > adimin mode, otherwise the menu item is disabled.

1. Extension>Text>TexText
need to install the TexText extension: https://textext.github.io/textext/index.html

one benefit is that it can store LaTeX formula inside the ns18:text property of the 'g' element, so you can reedit the formula.
i.e.,: \(\displaystyle\frac{\pi^2}{6}=\lim_{n \to \infty}\sum_{k=1}^n \frac{1}{k^2}\)

