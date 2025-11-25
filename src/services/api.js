const BASE_URL = "http://localhost:8000";

export async function listarCategorias() {
    try {
        const res = await fetch(`${BASE_URL}/categoria`, {
            headers: { Accept: 'application/json' }
        });
        if (res.ok) return res.json();

        let msg = `HTTP ${res.status}`;
        try {
            const body = await res.json();
            msg = body?.error || body?.message || msg;
        } catch {}
        throw new Error(msg);
    } catch (e) {
        throw new Error(e?.message || 'Falha de rede');
    }
}
