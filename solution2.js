
const nums = [2, 4, 8, 14, 7]; // Random array element
const target = 11; //  target element

const sumOfTwoEqualToTraget = (nums, target) => {

    if (!Array.isArray(nums)) {
        throw new Error("Invalid input: nums must be an array");
    }

    if (typeof target !== "number") {
        throw new Error("Invalid input: target must be a number");
    }

    if (nums.length < 2) {
        console.log("Array must have at least two elements.");
        return [];
    }

    for (let i = 0; i < nums.length; i++) {
        if (typeof nums[i] !== "number") {
            console.log(`skipping, invalid number found at index ${i}`);
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            if (typeof nums[j] !== "number") {
                console.log(`skipping, invalid number found at index ${j}`);
                continue;
            }
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    console.info("No pair found that sums to the target.");
    return [];
}
console.log(sumOfTwoEqualToTraget(nums, target));
