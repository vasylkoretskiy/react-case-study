const user = require('../models/user');

const search = async (req, res) => {
  const { keyword } = req.query;
  const maxResponsePages = 2;
  let response = [];

  for (let page = 1; page <= maxResponsePages; page += 1) {
    const resp = await user.search(keyword, page);
    if (resp && resp.Response === 'True' && resp.Search) response = response.concat(resp.Search);
    if (!resp || resp.Response !== 'True' || resp.totalResults < page * 10) break;
  }

  const status = 200;

  res.status(status).send({
    status,
    data: response,
  });
};

module.exports = {
  search,
};
