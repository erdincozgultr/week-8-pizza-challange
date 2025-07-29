    const pizzaMalzemeler = [
    "Pepperoni", "Domates", "Biber", "Sosis", "Mısır", "Sucuk", 
    "Kanada Jambonu", "Baton Sucuk", "Ananas", "Tavuk Izgara", 
    "Jalepeno", "Kabak", "Soğan", "Sarımsak"
  ];

describe('Ana Sayfa', () => {
  it('Componentleri yüklendi.', () => {
    cy.visit('http://localhost:5173');
    cy.contains('KOD ACIKTIRIR PIZZA, DOYURUR').should('be.visible');
    cy.contains('YENİ! Kore').should('be.visible');
    cy.contains('Position:Absolute Acı Burger').should('be.visible');
    cy.contains('en çok paketlenen menüler').should('be.visible');
    cy.contains('Ramen').should('be.visible');
    cy.contains('341 Londonderry Road, Istanbul Türkiye').should('be.visible');;
  })
  it('Butonları çalışıyor.', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy="button-heading"]').click();
    cy.url().should('include', '/order');
    cy.go('back');
    cy.get('[data-cy="button-absolute"]').click();
    cy.url().should('include', '/order');
    cy.go('back');
    cy.get('[data-cy="button-hackathlon"]').click();
    cy.url().should('include', '/order');
    cy.go('back');
    cy.get('[data-cy="button-nmp"]').click();
    cy.url().should('include', '/order');
  })
})

describe('Form', () => {
  it('Componentleri yüklendi.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="banner-logo"]').should('be.visible');
    cy.contains('Position Absolute Pizza').should('be.visible');
    cy.contains('Sipariş Notu').should('be.visible');
    cy.contains('341 Londonderry Road, Istanbul Türkiye').should('be.visible');
  })
  it('İlk yüklenmede "SİPARİŞ VER" butonu kapalı.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-submit"]').should("be.disabled");
  })
  it('Sadece pizza boyutu seçildikten sonra buton kapalı', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('[data-cy="button-submit"]').should("be.disabled");
  })
  it('Sadece pizza hamuru seçildikten sonra buton kapalı', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur'); 
    cy.get('[data-cy="button-submit"]').should("be.disabled");
  })
  it('Pizzanın boyutu ve hamuru seçildikten sonra buton açık', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur'); 
    cy.get('[data-cy="button-submit"]').should("not.be.disabled");
  })
  it('Pizzanın boyutu ve hamuru seçildikten sonrada buton açık', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur'); 
    cy.get('[data-cy="button-submit"]').should("not.be.disabled");
  })
  it('Pizzanın boyutu, hamuru seçildikten ve 10 dan fazla malzeme seçildikten sonra buton kapalı. ', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur'); 
    for (let i = 0; i < 11; i++) {
      const malzemeAdi = pizzaMalzemeler[i];
      cy.get(`[data-cy="checkbox-${malzemeAdi}"]`).click({ force: true }); 
    }
    cy.get('[data-cy="button-submit"]').should("be.disabled");
  })
  it('Pizzanın boyutu, hamuru ve 10 dan fazla malzeme seçildikten sonra fazla malzeme azaltıldığında buton açık. ', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur'); 
    for (let i = 0; i < 11; i++) {
      const malzemeAdi = pizzaMalzemeler[i];
      cy.get(`[data-cy="checkbox-${malzemeAdi}"]`).click({ force: true }); 
    }
    cy.get(`[data-cy="checkbox-${pizzaMalzemeler[0]}"]`).click({ force: true }); 
    cy.get('[data-cy="button-submit"]').should("not.be.disabled");
  })
  it('Pizza adedi değiştirilebiliyor.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-incr"]').click();
    cy.get('[data-cy="button-incr"]').click();
    cy.get('[data-cy="button-desc"]').click();
    cy.get('[data-cy="pizza-count"]').contains("2");
  })
  it('Pizza adedi 1 den aşağıya düşmüyor.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-desc"]').click();
    cy.get('[data-cy="button-desc"]').click();
    cy.get('[data-cy="button-desc"]').click();
    cy.get('[data-cy="button-desc"]').click();
    cy.get('[data-cy="pizza-count"]').contains("1");
  })
})

describe('Sipariş sayfası', () => {
  it('Componentleri yüklendi.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur');
    cy.get('[data-cy="button-submit"]').click();
    cy.contains("SİPARİŞ ALINDI").should('be.visible');;
  })
  it('Seçilen bütün pizza verileri gözüküyor.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur');
    for (let i = 0; i < 10; i++) {
      const malzemeAdi = pizzaMalzemeler[i];
      cy.get(`[data-cy="checkbox-${malzemeAdi}"]`).click({ force: true }); 
    }
    cy.get('[data-cy="input-note"]').type("Çatal, bıçak istemiyorum.");
    cy.get('[data-cy="button-submit"]').click();
    cy.get('[data-cy="order-size"]').contains("S");
    cy.get('[data-cy="order-dough"]').contains("İncecik (Ekstra Kıtır) Hamur");
    cy.get('[data-cy="order-ingr"]').contains("Pepperoni, Domates, Biber, Sosis, Mısır, Sucuk, Kanada Jambonu, Baton Sucuk, Ananas, Tavuk Izgara");
    cy.get('[data-cy="order-note"]').contains("Çatal, bıçak istemiyorum.");
    cy.get('[data-cy="order-extra"]').contains("50₺");
    cy.get('[data-cy="order-total"]').contains("135.5₺");
  })
  it('Seçilen 3 pizza ve 5 er malzemeli pizza verileri doğru fiyatta gözüküyor.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur');
    for (let i = 0; i < 5; i++) {
      const malzemeAdi = pizzaMalzemeler[i];
      cy.get(`[data-cy="checkbox-${malzemeAdi}"]`).click({ force: true }); 
    }
    cy.get('[data-cy="button-incr"]').click();
    cy.get('[data-cy="button-incr"]').click();
    cy.get('[data-cy="button-submit"]').click();
    cy.get('[data-cy="order-extra"]').contains("75₺");
    cy.get('[data-cy="order-total"]').contains("331.5₺");
  })
  it('Malzeme seçilmediği zaman "Ekstra Malzeme Yok" yazısı gözüküyor.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur');
    cy.get('[data-cy="button-submit"]').click();
    cy.get('[data-cy="order-ingr"]').contains("Ekstra Malzeme Yok");
  })
  it('Sipariş notu girilmediği zaman sipariş notu bölmesi kaldırılıyor.', () => {
    cy.visit('http://localhost:5173/order');
    cy.get('[data-cy="button-S"]').click();
    cy.get('#order-input').select('İncecik (Ekstra Kıtır) Hamur');
    cy.get('[data-cy="button-submit"]').click();
    cy.get('[data-cy="order-note"]').should("not.exist");
  })
})