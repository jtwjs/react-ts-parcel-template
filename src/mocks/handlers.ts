import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const sample = [{}];

    return res(ctx.status(200), ctx.json({ sample }));
  }),
];

export default handlers;
