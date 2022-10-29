// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    datas:[
    {
      name: 'aszaychik',
      email: "aszaychik@gmail.com"
    },
    {
      name: 'agoes budi satriya',
      email: "agoeslmg1967@gmail.com"
    }]
  })
}
