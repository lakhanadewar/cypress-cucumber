class Base_PO {


    getLocators(value) {
        cy.fixture("config.json").then((data) => {
            console.log(data + "." + "locators" + "." + value)
        });
    }


    navigate(path) {

        cy.fixture("config.json").then((data) => {
            cy.visit(data.url + path);
        });

    }

}
export default Base_PO;