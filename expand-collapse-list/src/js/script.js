// Add your javascript here
/*
- All titles should always be visible.
- The first item should be in the expanded state by default.
- When an item is in the expanded state, the collapse icon should be visible next to the title (rightmost corner).
- When an item is in the collapsed state, the expand icon should be visible next to the title (rightmost corner).

- Clicking on the expand icon should collapse any expanded item and expand the selected item.
- Clicking on the collapse icon should collapse the description of the item.
- If the "Multiple" checkbox is checked, it should be possible to expand more than one item.
- If "Multiple" is not checked, when a new item is expanded, the current item should collapse then the new item should expand.
*/

let expandedIds = ['1'];
let collapsedIds = ['2', '3', '4', '5'];
const multipleSelectCheckbox = document.querySelector('#multiselect');

const update = () => {
  expandedIds.forEach((id) => {
    const elementToExpand = document.querySelector(`[data-testid="${id}"]`);
    elementToExpand.querySelector('.expand-icon').style.display = 'none';
    elementToExpand.querySelector('.collapse-icon').style.display = 'inline-block';
    elementToExpand.querySelector('.description').style.display = 'block';
  });
  collapsedIds.forEach((id) => {
    const elementToCollapse = document.querySelector(`[data-testid="${id}"]`);
    elementToCollapse.querySelector('.expand-icon').style.display = 'inline-block';
    elementToCollapse.querySelector('.collapse-icon').style.display = 'none';
    elementToCollapse.querySelector('.description').style.display = 'none'
  })
}

document.addEventListener('DOMContentLoaded', update);

document.querySelector('.carousel-container').addEventListener('click', (event) => {
  if (!event.target) return;

  const element = event.target;

  const testId = element.closest('[data-testid]').dataset.testid;
  if (!testId) return

  if (!element.closest('.title-section')) return

  if (collapsedIds.includes(testId)) {
    if (multipleSelectCheckbox.checked) {
      collapsedIds.splice(collapsedIds.indexOf(testId), 1);
      expandedIds.push(testId);
    } else {
      collapsedIds.splice(collapsedIds.indexOf(testId), 1);
      collapsedIds.push(...expandedIds);
      expandedIds = [testId];
    }
    update();
    return
  }

  if (expandedIds.includes(testId)) {
    expandedIds.splice(expandedIds.indexOf(testId), 1);
    collapsedIds.push(testId);
    update();
    return
  }
})