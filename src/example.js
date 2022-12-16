const { masa } = require("./config");

/**
 * Logs you in to the masa infrastructure
 * @returns {Promise<void>}
 */
async function login() {
  // login
  await masa.session.login();

  // list balances for currently logged-in user
  await masa.account.getBalances();
}

/**
 * Creates an identity if not already done. Requires login.
 * @returns {Promise<void>}
 */
async function createIdentity() {
  await login();

  // create identity for currently logged-in user
  await masa.identity.create();
}

/**
 * Creates a credit score if not already done. Requires identity.
 * @returns {Promise<void>}
 */
async function createCreditScore() {
  // login
  await createIdentity();

  // create credit score for currently logged-in user
  const { success, message } = await masa.creditScore.create();

  if (!success) {
    console.error(message);
  }

  // list credit scores for currently logged-in user
  await masa.creditScore.list();
}

module.exports = {
  login,
  createIdentity,
  createCreditScore,
};

require("make-runnable/custom")({
  printOutput: false,
});
