var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], sMap.get(s[i]) ? sMap.get(s[i]) + 1 : 1);
    tMap.set(t[i], tMap.get(t[i]) ? tMap.get(t[i]) + 1 : 1);
  }

  for (const [k, v] of sMap) {
    if (v !== tMap.get(k)) {
      return false;
    }
  }
  return true;
};
