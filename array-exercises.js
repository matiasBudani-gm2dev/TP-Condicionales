let stack = []
stack.push(10, 20, 30)
console.log(stack.pop())
console.log(stack.at(-1))
stack.push(40)
console.log(stack.at(-1))
console.log(stack.length)

let queue = []
queue.push('A', 'B', 'C')
console.log(queue.shift())
console.log(queue[0])
queue.push('D')
console.log(queue[0])
console.log(queue.length)

// 3 El mas performativo es stack, ya que no reindexan el array al no usar un shift. Solamente elimina el ultimo elemento, mientras que queue elimina el primero.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */var twoSum = function(nums, target) {
    let sameAsTarget;
    for(x = 0; x < nums.length; x++){
        for(y = 0; y<nums.length; y++){
            if(x != y){
                sameAsTarget = nums[x] + nums[y]
            }
            if(sameAsTarget == target){
                return [x, y]
            }
        } 
    }
};

console.log(twoSum([3,3], 6))
