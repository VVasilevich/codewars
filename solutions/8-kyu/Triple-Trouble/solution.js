function tripleTrouble(one, two, three) {
    let res = '';
    for (let i = 0; i < one.length; i++) {
      res += one[i];
      res += two[i];
      res += three[i];
    }
    return res;
}