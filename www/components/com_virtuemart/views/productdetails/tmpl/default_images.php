<?php
/**
 *
 * Show the product details page
 *
 * @package	VirtueMart
 * @subpackage
 * @author Max Milbers, Valerie Isaksen

 * @link http://www.virtuemart.net
 * @copyright Copyright (c) 2004 - 2010 VirtueMart Team. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL, see LICENSE.php
 * VirtueMart is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * @version $Id: default_images.php 6188 2012-06-29 09:38:30Z Milbo $
 */
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die('Restricted access');
vmJsApi::js( 'fancybox/jquery.fancybox-1.3.4.pack');
vmJsApi::css('jquery.fancybox-1.3.4');
$document = JFactory::getDocument ();
$imageJS = '
jQuery(document).ready(function() {
	jQuery("a[rel=vm-additional-images]").fancybox({
		"titlePosition" 	: "inside",
		"transitionIn"	:	"elastic",
		"transitionOut"	:	"elastic"
	});
});
';
$document->addScriptDeclaration ($imageJS);

if (!empty($this->product->images)) {
	$image = $this->product->images[0];
	?>
<div class="main-image">

	<?php
	$file_alt1=$this->product->product_name;
	
	// Порядок замены

$order   = array( '"', "'", '*', ',' , '-');
$replace = ' ';

	// Обрабатывает сначала  для избежания их повторной замены.
	$file_alt2= str_replace($order, $replace, $file_alt1);
		echo $image->displayMediaFull($imageArgs='',$lightbox=true,$effect="class='modal' rel='vm-additional-images'",$return = true,$withDescr = false,$absUrl = false, $width=0,$height=0, 
		$file_alt2);
		
	?>

	 <div class="clear"></div>
</div>
<?php
	$count_images = count ($this->product->images);
	if ($count_images > 1) {
		?>
    <div class="additional-images">
		<?php
		for ($i = 1; $i < $count_images; $i++) {
			$image = $this->product->images[$i];
			?>
            <div class="floatleft">
	            <?php
	                echo $image->displayMediaFull("",true,"rel='vm-additional-images'");
	            ?>
            </div>
			<?php
		}
		?>
        <div class="clear"></div>
    </div>
	<?php
	}
}
  // Showing The Additional Images END ?>