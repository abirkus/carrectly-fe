import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const yelpReviews =
  'https://www.yelp.com/biz/TJwlpHYs_n7FyoTK3jN5-A/review_feed?rl=en&q=&sort_by=rating_desc&start=0';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(yelpReviews);
    res.send(response.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(error.status || 500).end(error.message);
  }
}
