
// Script hau Formatting, Citation and Quotation elementserako erabilitako berdina da

    const accordionButtons = document.querySelectorAll('.akordeoi-botoia');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isActive = content.classList.contains('active');
 
             // 1. Lehenik, irekita egon daitezkeen BESTE guztiak itxi
            document.querySelectorAll('.akordeoi-edukia').forEach(item => {
                item.classList.remove('active');
            });

            // 2. Klikatu duguna lehen itxita bazegoen, orain ireki
            // (Lehen irekita bazegoen, goiko lerroak itxi egin du lehendabizi)
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });


