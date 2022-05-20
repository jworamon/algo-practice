const merge = (nums1, m, nums2, n) => {
    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let pointer3 = m + n - 1;

    while (pointer2 >= 0) {
        nums1[pointer3--] = nums1[pointer1--] > nums2[pointer2--] ?
            nums1[pointer1--] :
            nums2[pointer2--];
    }
    return nums1;
}