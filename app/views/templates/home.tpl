{extends file="index.tpl"}
{block name="body"}
    {include "home_products.tpl"}
    {include "reviews.tpl"}
{/block}
{block name="scripts"}
    <script>
        {literal}
        const productItems = document.querySelectorAll('.ProductGrid_gridItem__PJEJA');

        productItems.forEach(item => {
            item.addEventListener('click', () => {
                window.location.href = '/products/item';
            });
        });

        {/literal}
    </script>
{/block}