
export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    p.innerHTML = string;
    htmlElement.appendChild(p);
};

// const partyHeader = document.getElementById('party');
// htmlGenerator('Party Time.', partyHeader);

