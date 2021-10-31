/* eslint-disable ui-testing/missing-assertion-in-test */

// describe("Counter test", () => {
describe("First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true)
  })
})
//   it("Add count", () => {
//     cy.visit("http://localhost:3000/")
//     // cy.visit("/")

//     // cy.pause()

//     cy.contains("Connect").click()
//     // cy.get("button").click()

//     // cy.url()
//     //   .should('include', '/commands/actions')

//     // cy.get("h2")
//     //   // .type('1')
//     //   .should("have.text", 2)
//   })
// })
// before(() => {
//   if (!Cypress.env("SKIP_METAMASK_SETUP")) {
//     cy.setupMetamask(
//       process.env.PRIVATE_KEY,
//       process.env.NETWORK_NAME,
//       process.env.PASSWORD
//     )
//   }
// })

// let metamaskWalletAddress

describe("Wallet tests", () => {
  // before(() => {
  before(() => {
    // cy.setupMetamask()
  })

  // cy.acceptMetamaskAccess()
  context("Connect metamask wallet", () => {
    it(`should login with success`, () => {
      cy.visit("/").then
      it("Connect", () => {
        // cy.visit("http://localhost:3001/")
        cy.contains("+").click()
      })

      it("Market", () => {
        // cy.visit("http://localhost:3001/")
        // cy.visit("/").then

        cy.contains("+").click()
      })
      // cy.setupMetamask(
      //   process.env.PRIVATE_KEY,
      //   process.env.NETWORK_NAME,
      //   process.env.PASSWORD
      // )
      // cy.visit("/")

      // cy.setupMetamask()
      // cy.changeMetamaskNetwork()
      // exchange.waitUntilLoggedIn()
      // exchange.getLoggedInWalletAddress().then((exchangeWalletAddress) => {
      //   const formattedMetamaskWalletAddress =
      //     metamaskWalletAddress.slice(0, 5) +
      //     "..." +
      //     metamaskWalletAddress.slice(-5)
      //   expect(exchangeWalletAddress).to.equal(
      //     formattedMetamaskWalletAddress.toLowerCase()
      //   )
      // })
    })
  })
  //   debugger
  //   // cy.unlockMetamask("10021993Yura")
  // cy.setupMetamask({
  //   secretWords: "secretWordsOrPrivateKey",
  //   network: "mainnet",
  //   password: "10021993Yura",
  // })
  // cy.
  //   // cy.changeMetamaskNetwork("localhost")
  // })
  // it("is expected to display a sussess message", () => {
  //   cy.get("[data-cy=title]").should("contain.text", "MetaMask Detected")
  // })
  // before(() => {
  //   cy.fetchMetamaskWalletAddress().then((address) => {
  //     metamaskWalletAddress = address
  //   })
  //   cy.visit("http://localhost:3001/")
  // })
  // it("Variable", () => {
  //   // cy.visit("http://localhost:3001/")
  //   cy.contains("Variable").click()
  // })

  // it("Fixed", () => {
  //   cy.contains("Fixed").click()
  // })
  // it("is expected to display the local wallet address", () => {
  //   cy.get("[data-cy=address").should(
  //     "contain.text",
  //     "Your address is: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"
  //   )
  // })
  // it("is expected to display the local wallet  balance", () => {
  //   cy.get("[data-cy=balance").should(
  //     "contain.text",
  //     "Balance: 10000000000000000000000"
  //   )
  // })
})
