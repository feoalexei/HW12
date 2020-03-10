'use strict';
/*---------------- Tooltip ---------------------------*/
function initTooltip() {
    const $tooltips = document.querySelectorAll('.tooltip');
    $tooltips.forEach(elem => {
        elem.addEventListener('mouseover', (e) => {
            const $tooltipContent = document.createElement('span');
            $tooltipContent.textContent = e.target.dataset.tooltip;
            $tooltipContent.className = 'tooltip-content';
            e.target.append($tooltipContent);
        });

        elem.addEventListener('mouseout', (e) => {
            e.target.querySelector('.tooltip-content').remove();
        });
    });
}
initTooltip();

/*---------------- Accordion ---------------------------*/
function initAccordion() {
    const $accordion = document.querySelector('.accordion');
    $accordion.addEventListener('click', (e) => {
        if (e.target.classList.contains('title')) {
            e.target.classList.toggle('is-active');
        }
    });
}
initAccordion();