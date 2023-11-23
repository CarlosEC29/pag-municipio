"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export const barraLateral = () => {
	return (
		<select className="cuerpo">{/*le agrego el css */}
			<div className="container">
				<p className="float-start"> contacto telefonico: 2284-****** </p>
				<p className="float-end">correo:<a className="link-opacity-50-hover"
						href="" target="blank">municipalidadhodward@gmail.com</a></p>{/*al correo lo hago un boton link */}
			</div>
		</select>

	)
}