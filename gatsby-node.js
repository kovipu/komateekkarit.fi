/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
  const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  createRedirect({ fromPath: '/tuutorit', toPath: '/tuutorit/index.html', isPermanent: true });
  createRedirect({ fromPath: '/muistilista', toPath: '/muistilista/index.html', isPermanent: true });
}