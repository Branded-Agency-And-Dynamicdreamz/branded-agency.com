import queryString from "query-string"
import { HUBSPOT_CONTACTS_API } from "../apis/apis"

export default async function handler(req, res) {
  try {
    const contactUpdated = await HUBSPOT_CONTACTS_API.patch(
      `/${req?.body?.email}?idProperty=email`,
      JSON.stringify({ properties: req?.body?.properties }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
          Accept:
            "application/json, application/xml, text/plain, text/html, *.*",
        },
      },
    )

    if (!contactUpdated) {
      return res.status(500).json({ error: "Problem updating contact" })
    }

    return res.status(200).json({ contactUpdated: contactUpdated?.data })
  } catch (error) {
    console.log("error :>> ", error?.response?.data)
    res.send(error?.response?.data)
  }
}
