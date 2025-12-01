# Galleria Fotografica - Casa Vacanze Torpè

Questa cartella contiene le immagini della galleria fotografica.

## 📁 Struttura File

### Immagini Richieste:

#### Esterni (3 foto)
- `esterno-1.jpg` - Vista esterna dell'appartamento
- `terrazzo-1.jpg` - Terrazzo panoramico
- `vista-tramonto.jpg` - Vista tramonto dal terrazzo

#### Camere (2 foto)
- `camera-1.jpg` - Camera da letto matrimoniale
- `camera-2.jpg` - Seconda camera da letto

#### Cucina e Soggiorno (2 foto)
- `cucina-1.jpg` - Cucina completamente attrezzata
- `soggiorno-1.jpg` - Soggiorno luminoso

#### Bagno (1 foto)
- `bagno-1.jpg` - Bagno moderno

#### Dettagli (1 foto)
- `dettaglio-1.jpg` - Dettaglio arredamento

## 🎨 Immagini Placeholder Temporanee

Finché non hai le tue foto reali, usa queste immagini placeholder di alta qualità da Unsplash:

### Esterni
```
esterno-1.jpg -> https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1440&fit=crop
terrazzo-1.jpg -> https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1440&fit=crop
vista-tramonto.jpg -> https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1440&fit=crop
```

### Camere
```
camera-1.jpg -> https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1440&fit=crop
camera-2.jpg -> https://images.unsplash.com/photo-1616137422495-6c523fbc11b2?w=1920&h=1440&fit=crop
```

### Cucina e Soggiorno
```
cucina-1.jpg -> https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1440&fit=crop
soggiorno-1.jpg -> https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1440&fit=crop
```

### Bagno
```
bagno-1.jpg -> https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1440&fit=crop
```

### Dettagli
```
dettaglio-1.jpg -> https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1920&h=1440&fit=crop
```

## 📥 Download Script

Per scaricare automaticamente le immagini placeholder, esegui:

```bash
cd public/images/gallery

# Esterni
curl -L "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1440&fit=crop&q=85" -o esterno-1.jpg
curl -L "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1440&fit=crop&q=85" -o terrazzo-1.jpg
curl -L "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1440&fit=crop&q=85" -o vista-tramonto.jpg

# Camere
curl -L "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1440&fit=crop&q=85" -o camera-1.jpg
curl -L "https://images.unsplash.com/photo-1616137422495-6c523fbc11b2?w=1920&h=1440&fit=crop&q=85" -o camera-2.jpg

# Cucina e Soggiorno
curl -L "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=1440&fit=crop&q=85" -o cucina-1.jpg
curl -L "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&h=1440&fit=crop&q=85" -o soggiorno-1.jpg

# Bagno
curl -L "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1440&fit=crop&q=85" -o bagno-1.jpg

# Dettagli
curl -L "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1920&h=1440&fit=crop&q=85" -o dettaglio-1.jpg
```

## 🔄 Sostituire con le Tue Foto

Quando hai le foto reali del tuo appartamento:

1. Scatta foto di buona qualità
2. Ottimizzale (max 500KB per foto)
3. Rinominale con gli stessi nomi sopra indicati
4. Sostituiscile in questa cartella
5. Fai commit e push su GitHub

## 📏 Specifiche Tecniche

- **Formato**: JPG o WebP
- **Dimensioni**: 1920x1440px (rapporto 4:3)
- **Peso**: Max 500KB
- **Qualità**: 80-85%

## ✅ Verifica

Dopo aver aggiunto le immagini, verifica che siano tutte presenti:

```bash
ls -lh public/images/gallery/
```

Dovresti vedere 9 file .jpg
