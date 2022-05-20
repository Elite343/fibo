import { Request, Response, Router } from 'express';
import fiboService from '@services/fibo-service';

// Constants
const router = Router();

// Paths
export const pth = {
    get: '/:indx',
} as const;

// Calculate Fibo
router.get(pth.get, async (req: Request, res: Response) => {
    const { indx } = req.params;
    const fibo = await fiboService.getFibo(indx);
    return res.status(200).json({fibo});
});

// Export default
export default router;
