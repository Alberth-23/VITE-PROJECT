from datetime import datetime

from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(
    title="Portfolio API",
    version="1.0.0",
)

# Orígenes permitidos (tu frontend Vite)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


@app.post(
    "/api/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
)
async def send_contact_message(payload: ContactRequest):
    """
    Endpoint para recibir mensajes del formulario de contacto del portafolio.
    Por ahora solo hace log por consola y devuelve success=True.
    """
    print(f"[CONTACT] {datetime.utcnow().isoformat()} - {payload.model_dump()}")

    return ContactResponse(
        success=True,
        message="Mensaje recibido. Te contactaré pronto.",
    )


@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "ok"}
