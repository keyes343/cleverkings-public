export const apis = {
    aws: 'https://14a5a2c1q6.execute-api.ap-south-1.amazonaws.com/dev', // verified for rentospot
    // aws: 'http://localhost:5000',
    drive: 'https://drive.google.com/uc?export=view&id=',
    s3_category: 'https://rentospot-publicfiles.s3.ap-south-1.amazonaws.com/siteImages/categories/',
    s3_subcategory: 'https://rentospot-publicfiles.s3.ap-south-1.amazonaws.com/siteImages/subcategories/',
    // backend
};

export const backend = {
    // fileUploads
    fileUpload: apis.aws + '/product/fileUpload',
    // user
    upload_user_identity: apis.aws + '/user/upload/identity/new',
    upload_user_myprofile: apis.aws + '/user/upload/myprofile',
    // product
    upload_jobForm: apis.aws + '/job/upload',
    upload_productForm: apis.aws + '/product/upload',
    // product myAds
    myads: apis.aws + '/product/myads',
    // product
    makeFeatured_product: apis.aws + '/product/featured/yes',
    removeFeatured_product: apis.aws + '/job/featured/no',
    getProduct: apis.aws + '/product/getProduct',
    getFeaturedProducts: apis.aws + '/product/getFeaturedProducts',
    // job
    // featured
    makeFeatured_job: apis.aws + '/job/featured/yes',
    removeFeatured_job: apis.aws + '/job/featured/no',

    job_freelancer: apis.aws + '/job/subcategory/Freelancer',
    job_professional: apis.aws + '/job/subcategory/Professional',
    // recent items
    getRecent: apis.aws + '/product/getRecent',
    findProducts: apis.aws + '/product/findProducts',
};

export const params = {
    ads_action: 'ads_action',
    product_action: 'action',
    // category: 'category',
    // subcategory: 'subcategory',
    productId: 'product_Id',
};

export const paths = {
    home: '/',
    login: '/login/',
    // quick links
    about_us: '/about',
    services: '/services',
    careers: '/careers',
    contact: '/contact',
};

const siteImages_api = 'https://cleverkings-publicfiles.s3.ap-south-1.amazonaws.com/siteImages/';
export const pics = {
    headers: {
        blog: siteImages_api + 'blog.png',
        career: siteImages_api + 'career.png',
        about: siteImages_api + 'about.png',
        contact: siteImages_api + 'contact.png',
        cookie: siteImages_api + 'cookie.png',
        portfolio: siteImages_api + 'portfolio.png',
        process: siteImages_api + 'process.png',
        services: siteImages_api + 'services.png',
        terms: siteImages_api + 'terms.png',
        digital_cards: siteImages_api + 'terms.png',
    },
};
