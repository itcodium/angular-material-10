export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';

function fetchPageNumbers(pageNeighbours, totalPages, currentPage) {
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
        const startPage = Math.max(2, currentPage - pageNeighbours);
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
        let pages = range(startPage, endPage);

        const hasLeftSpill = startPage > 2;
        const hasRightSpill = (totalPages - endPage) > 1;
        const spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage - 1);
                pages = [LEFT, ...extraPages, ...pages];
                break;
            }

            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT];
                break;
            }

            case (hasLeftSpill && hasRightSpill):
            default: {
                pages = [LEFT, ...pages, RIGHT];
                break;
            }
        }

        return [1, ...pages, totalPages];
    }
    return range(1, totalPages);

}

function range(from, to, step = 1) {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
}



class PageNumbers {
    isAcceptable() {
        return "test";
    }
}

export { fetchPageNumbers };