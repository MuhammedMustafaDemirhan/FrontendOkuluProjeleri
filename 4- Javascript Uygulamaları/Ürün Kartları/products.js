const products = [
  {
    id: 1,
    name: "CASPER Excalibur M.E27FVC-E",
    price: 6999,
    description: "27' 1 ms 300 Hz Full HD Fast VA Curved Oyuncu Monitörü Siyah",
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_148333378?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
  },
  {
    id: 2,
    name: "ASUS TUF Gaming VG249Q3R",
    price: 5299,
    description: "23.8 FAST IPS 1920x1080 1ms 180Hz Monitör",
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_157493839?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
  },
  {
    id: 3,
    name: "MSI 24.5' G255PF E2",
    price: 5499,
    description:
      "1920 x 1080 (FHD) 16:9 Flat Rapid IPS 180HZ 1MS Adaptive-Sync Pivot Gaming Monitör",
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_148998311?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
  },
  {
    id: 4,
    name: "RAMPAGE Crimson CR25R180",
    price: 4899,
    description:
      "25' 200Hz 0.5ms CSOT FAST IPS FHD Freesync/G-Sync PC Flat Oyuncu Monitörü",
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_147696031?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402",
  },
];

localStorage.setItem("products", JSON.stringify(products));
