/* An image is represented by an m x n integer grid image where 
image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. 
You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 
4-directionally to the starting pixel of the same color as the starting pixel, 
plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. 
Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

Example:
    Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
    Output: [[2,2,2],[2,2,0],[2,0,1]]
    Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), 
    all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) 
    are colored with the new color.
    Note the bottom corner is not colored 2, because it is not 4-directionally connected to 
    the starting pixel.
*/

const floodFillDFS = (image, sr, sc, newColor) => {
    const currentColor = image[sr][sc];
    if (currentColor === newColor) return image;

    const callDFS = (img, row, col) => {
        if (
            row < 0 ||
            row >= img.length ||
            col < 0 ||
            col >= img[0].length ||
            img[row][col] !== currentColor
        )
            return;
        img[row][col] = newColor;
        callDFS(img, row + 1, col);
        callDFS(img, row - 1, col);
        callDFS(img, row, col + 1);
        callDFS(img, row, col - 1);
        return img;
    }
    return callDFS(image, sr, sc);
}

const floodFillBFS = (image, sr, sc, newColor) => {
    const currentColor = image[sr][sc];
    if (currentColor === newColor) return image;

    const queue = [[sr, sc]];
    while (queue.length) {
        const [row, col] = queue.shift();
        if (image[rol][col] === currentColor) {
            image[row][col] = newColor;
            if (row - 1 >= 0) queue.push([[row - 1, col]]);
            if (row + 1 < image.length) queue.push([[row + 1, col]]);
            if (col - 1 >= 0) queue.push([[row, col - 1]]);
            if (col + 1 >= image[0].length) queue.push([[row, col + 1]]);
        }
    }
    return image;
}