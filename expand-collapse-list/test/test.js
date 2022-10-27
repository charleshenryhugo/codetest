import {fireEvent, getByTestId} from "@testing-library/dom"
import "@testing-library/jest-dom/extend-expect"
import jsdom, {JSDOM} from "jsdom"
import path from "path"

const BASE = path.resolve(__dirname, "../src")

let virtualConsole
let dom, body

describe("accordion test", function () {
    beforeEach(async () => {
        virtualConsole = new jsdom.VirtualConsole()
        virtualConsole.on("error", console.error)
        dom = await JSDOM.fromFile(`${BASE}/index.html`, {
            runScripts: "dangerously",
            resources: "usable",
            pretendToBeVisual: true,
            virtualConsole
        })
        await loadDom(dom)
        body = dom.window.document.body
    })

    it('shows the 1st item description expanded by default', async function () {
        const accordion1 = getByTestId(body, '1')
        const description1 = accordion1.querySelector('.description')
        expect(description1).toBeVisible()

        const ids = ['2', '3', '4', '5']
        for (const id of ids) {
            const accordion = getByTestId(body, id)
            const description = accordion.querySelector('.description')
            expect(description).not.toBeVisible()
        }
    })

    it('expands the item description when clicking on a title of collapsed element', async function () {
        const ids = ['2', '3', '4', '5']

        for (const id of ids) {
            const accordion = getByTestId(body, id)
            const title = accordion.querySelector('.title')
            let description = accordion.querySelector('.description')
            expect(description).not.toBeVisible()

            await fireEvent.click(title)

            description = accordion.querySelector('.description')
            expect(description).toBeVisible()
        }
    })

    it('shows expand icon when item is collapsed', async function () {
        const accordion = getByTestId(body, '1')
        const titleSection = accordion.querySelector('.title-section')
        const title = titleSection.querySelector('.title')
        let collapseIcon = titleSection.querySelector('.collapse-icon')
        let expandIcon = titleSection.querySelector('.expand-icon')

        expect(collapseIcon).toBeVisible()
        expect(expandIcon).not.toBeVisible()

        await fireEvent.click(title)

        collapseIcon = titleSection.querySelector('.collapse-icon')
        expandIcon = titleSection.querySelector('.expand-icon')

        expect(collapseIcon).not.toBeVisible()
        expect(expandIcon).toBeVisible()
    })

    it('shows collapse icon when item is expanded', async function () {
        const ids = ['2', '3', '4', '5']

        for (const id of ids) {
            const accordion = getByTestId(body, id)
            const titleSection = accordion.querySelector('.title-section')
            const title = titleSection.querySelector('.title')
            let collapseIcon = titleSection.querySelector('.collapse-icon')
            let expandIcon = titleSection.querySelector('.expand-icon')

            expect(collapseIcon).not.toBeVisible()
            expect(expandIcon).toBeVisible()

            await fireEvent.click(title)

            collapseIcon = titleSection.querySelector('.collapse-icon')
            expandIcon = titleSection.querySelector('.expand-icon')

            expect(collapseIcon).toBeVisible()
            expect(expandIcon).not.toBeVisible()
        }
    })

    it('collapses the item description when clicking on title of expanded item', async function () {
        const accordion = getByTestId(body, '1')
        const title = accordion.querySelector('.title')

        let description = accordion.querySelector('.description')
        expect(description).toBeVisible()

        await fireEvent.click(title)

        description = accordion.querySelector('.description')
        expect(description).not.toBeVisible()
    })

    it('collapses all expanded elements when expanding an another item', async function () {
        const accordion1 = getByTestId(body, '1')

        let description1 = accordion1.querySelector('.description')
        expect(description1).toBeVisible()

        const accordion2 = getByTestId(body, '2')
        const title2 = accordion2.querySelector('.title')

        let description2 = accordion2.querySelector('.description')
        expect(description2).not.toBeVisible()

        await fireEvent.click(title2)

        description1 = accordion1.querySelector('.description')
        description2 = accordion2.querySelector('.description')

        expect(description2).toBeVisible()
        expect(description1).not.toBeVisible()
    })

    it('expands more than one item if multi-select is enabled', async function() {
        const multiSelect = getByTestId(body, 'multiselect')
        const accordion1 = getByTestId(body, '1')

        let description1 = accordion1.querySelector('.description')
        expect(description1).toBeVisible()

        fireEvent.click(multiSelect)

        const accordion2 = getByTestId(body, '2')
        const accordion3 = getByTestId(body, '3')
        const title2 = accordion2.querySelector('.title')
        const title3 = accordion3.querySelector('.title')

        let description2 = accordion2.querySelector('.description')
        let description3 = accordion2.querySelector('.description')
        expect(description2).not.toBeVisible()
        expect(description3).not.toBeVisible()

        await fireEvent.click(title2)
        await fireEvent.click(title3)

        description1 = accordion1.querySelector('.description')
        description2 = accordion2.querySelector('.description')
        description3 = accordion3.querySelector('.description')

        expect(description1).toBeVisible()
        expect(description2).toBeVisible()
        expect(description3).toBeVisible()
    });

    it('collapses all other items when expanding an item after multi-select has beem disabled', async function() {
        const multiSelect = getByTestId(body, 'multiselect')
        const accordion1 = getByTestId(body, '1')

        let description1 = accordion1.querySelector('.description')
        expect(description1).toBeVisible()

        fireEvent.click(multiSelect)

        const accordion2 = getByTestId(body, '2')
        const accordion3 = getByTestId(body, '3')
        const title2 = accordion2.querySelector('.title')
        const title3 = accordion3.querySelector('.title')

        let description2 = accordion2.querySelector('.description')
        let description3 = accordion2.querySelector('.description')
        expect(description2).not.toBeVisible()
        expect(description3).not.toBeVisible()

        await fireEvent.click(title2)
        await fireEvent.click(title3)

        description1 = accordion1.querySelector('.description')
        description2 = accordion2.querySelector('.description')
        description3 = accordion3.querySelector('.description')

        expect(description1).toBeVisible()
        expect(description2).toBeVisible()
        expect(description3).toBeVisible()

        fireEvent.click(multiSelect)

        const accordion4 = getByTestId(body, '4')
        const title4 = accordion4.querySelector('.title')
        let description4 = accordion4.querySelector('.description')

        expect(description4).not.toBeVisible()
        fireEvent.click(title4)

        description1 = accordion1.querySelector('.description')
        description2 = accordion2.querySelector('.description')
        description3 = accordion3.querySelector('.description')
        description4 = accordion4.querySelector('.description')

        expect(description1).not.toBeVisible()
        expect(description2).not.toBeVisible()
        expect(description3).not.toBeVisible()
        expect(description4).toBeVisible()
    });
})

function loadDom(dom) {
    return new Promise((resolve, _) => {
        virtualConsole.on("log", log => {
            if (log === "DOM Loaded") resolve(dom)
        })
    })
}