// Simulación de datos de usuario (Reemplazar con backend real)
const users = [
    { id: 1, username: 'doctor', password: 'password', role: 'doctor' },
    { id: 2, username: 'admin', password: 'password', role: 'admin' },
];

const STORAGE_KEY = 'user'

export const login = async (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
                resolve(user);
            } else {
                reject(new Error('Credenciales inválidas'));
            }
        }, 500); // Simula una llamada a la API
    });
};

export const logout = async () => {
    localStorage.removeItem(STORAGE_KEY);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 100)
    });
};

export const fetchUser = async () => {
    const user = localStorage.getItem(STORAGE_KEY);
    if (user) {
        return JSON.parse(user);
    } else {
        return null;
    }
}