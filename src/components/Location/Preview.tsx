import { Dialog } from "@mui/material"
import { useState } from "react"
import { useLocationQuery } from "../../hooks"
import { Icon } from '@iconify/react';
import { Badge } from "flowbite-react";
import { Link } from "react-router-dom"

export const PreviewLocations = () => {
      const [open, setOpen] = useState(false)
      const locations = useLocationQuery()

      return (<div className="font-p">
            <button title="button" onClick={() => setOpen(true)} className="text-md font-medium flex gap-2 items-center hover:underline ">
                  <Icon icon="ph:globe-simple" className="text-lg" /> FIND US
            </button>
            <Dialog
                  fullWidth={true}
                  maxWidth={'lg'}
                  open={open}
                  onClose={() => setOpen(false)}
            >
                  <div className="flex font-p p-6 gap-4 flex-col flex-wrap">
                        <h1 className="text-3xl font-semibold font-title">Our Locations</h1>
                        {
                              locations.data?.map((location, i) =>
                                    <div className="flex flex-col justify-center gap-1" key={i}>
                                          <h1 className="flex gap-8 flex-row max-w-md text-lg">{location.name} {location.isStore && <Badge
                                                color="success"
                                                size="sm"
                                          >
                                                Store
                                          </Badge>}</h1>
                                          <p className="text-sm text-gray-500">{location.address}</p>
                                          <span className="flex flex-row my-3 text-2xl flex-wrap gap-2">
                                                {
                                                      location.phone.map((phone) => <a href={`tel:${phone}`} key={phone} className="p-2 rounded-full text-center justify-center flex items-center bg-red-100 text-rose w-12 h-12">
                                                            <Icon icon="carbon:phone" />
                                                      </a>)
                                                }
                                                {
                                                      location.email.map((email) => <a href={`mailto:${email}`} className="p-2 rounded-full bg-red-50 text-center flex justify-center items-center text-rose w-12 h-12" key={email}>
                                                            <Icon icon="clarity:email-line" />
                                                      </a>)
                                                }
                                          </span>
                                          <iframe src={location.maps} className="border-none mx-auto mt-3 h-96 lg:h-[16rem] w-full lg:w-9/12" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                    </div>
                              )
                        }
                  </div>
            </Dialog>

      </div>)
}