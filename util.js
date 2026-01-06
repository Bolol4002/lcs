// util.js

const houseRobber = (nums) => {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];

    let prev2 = 0;       
    let prev1 = nums[0]; 

    for (let i = 1; i < n; i++) {
        const pick = nums[i] + prev2;
        const skip = prev1;
        const curr = Math.max(pick, skip);

        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};

export const house_robber_endpoint = (req, res) => {
    try {
        const nums = req.query.nums
            .split(',')
            .map(Number);

        if (nums.some(isNaN)) {
            return res.status(400).send('Invalid input');
        }

        const ans = houseRobber(nums);
        res.json({ result: ans });

    } catch (err) {
        res.status(500).send('Server error');
    }
};
