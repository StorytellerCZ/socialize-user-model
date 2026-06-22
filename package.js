/* global Package */

Package.describe({
    name: 'socialize:user-model',
    summary: 'A social user package',
    version: '2.0.0',
    git: 'https://github.com/copleykj/socialize-user-model.git',
});

Package.onUse(function _(api) {
    api.versionsFrom(['2.8.1', '3.0']);

    api.use([
        'socialize:linkable-model@2.0.0',
        'accounts-base',
        'aldeed:simple-schema@2.0.0 || 3.0.0'
    ]);

    api.use('accounts-password', { weak: true });

    api.imply(['socialize:linkable-model', 'accounts-base']);

    api.mainModule('common/common.js');
});
